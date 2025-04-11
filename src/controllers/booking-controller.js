const { BookingService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const { errorResponse, successResponse } = require("../utils/common");

async function createBooking(req, res) {
	try {
		// console.log(req.body);
		const response = await BookingService.createBooking({
			flightId: req.body.flightId,
			userId: req.body.userId,
			noOfSeats: req.body.noOfSeats,
		});
		successResponse.data = response;
		return res.status(StatusCodes.CREATED).json(successResponse);
	} catch (error) {
		console.log(error);
		errorResponse.error = error;
		errorResponse.message = "Something went wrong";
		// console.log(error);
		return res.status(error.statusCode).json(errorResponse);
	}
}

async function makePayment(req, res) {
	try {
		// console.log(req.body);
		const response = await BookingService.makePayment({
			bookingId: req.body.bookingId,
			userId: req.body.userId,
			totalCost: req.body.totalCost,
		});
		successResponse.data = response;
		return res.status(StatusCodes.OK).json(successResponse);
	} catch (error) {
		console.log(error);
		errorResponse.error = error;
		errorResponse.message = "Something went wrong";
		// console.log(error);
		return res.status(error.statusCode).json(errorResponse);
	}
}

module.exports = { createBooking, makePayment };
