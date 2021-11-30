package com.quizza.backend.responses;

public class AnswerResponseRest extends ResponseRest {
	
	private AnswerResponse answerResponse = new AnswerResponse();

	public AnswerResponse getAnswerResponse() {
		return answerResponse;
	}

	public void setAnswerResponse(AnswerResponse answerResponse) {
		this.answerResponse = answerResponse;
	}

}
