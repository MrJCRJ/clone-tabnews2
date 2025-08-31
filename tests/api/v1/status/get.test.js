import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});


test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200)

  const responseBody = await response.json()
  expect(responseBody.update_At).toBeDefined()

  const parsedUpdateAt = new Date(responseBody.update_At).toISOString()
  expect(responseBody.update_At).toEqual(parsedUpdateAt)


  expect(responseBody.dependencies.database.version).toEqual("16.10")
  expect(responseBody.dependencies.database.maxConnections).toEqual(100)
  expect(responseBody.dependencies.database.currentConnections).toEqual(1)
})