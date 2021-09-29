package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.MethodArgumentNotValidException;

@RestControllerAdvice
public class ApplicationExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ApiError> customerExceptionHandler(MethodArgumentNotValidException e) {
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST);
		apiError.setMessage("Hi " + e.getBindingResult().getFieldError().getDefaultMessage());
		
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ApiError> genericExceptionHandler(Exception e) {
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST);
		apiError.setMessage("Hello " + e.getMessage());
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}
}
