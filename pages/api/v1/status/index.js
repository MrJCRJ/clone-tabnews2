import database from "infra/database";

async function status(request, response) {

  const updatedAt = new Date().toISOString();

  const postgresVersion = await database.query("SHOW server_version;");

  const maxConnections = await database.query("SHOW max_connections;");

  const databaseName = process.env.POSTGRES_DB;
  const currentConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
  });

  response.status(200).json({
    update_At: updatedAt,
    dependencies: {
      database: {
        version: postgresVersion.rows[0].server_version,
        maxConnections: parseInt(maxConnections.rows[0].max_connections),
        currentConnections: currentConnections.rows[0].count
      }
    }
  });
}

export default status;
