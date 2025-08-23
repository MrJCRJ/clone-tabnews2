function status(request, response) {
  response.status(200).json({ message: "API is working" });
}

export default status;
