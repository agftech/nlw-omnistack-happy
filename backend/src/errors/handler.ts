import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, resp, next) => {
	console.log(error);
	return resp.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
