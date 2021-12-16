package com.quizza.backend.responses;

/**
 * @author juanjo78git
 *
 */
public class AnswerResponseRest extends ResponseRest {
	
	private AnswerResponse answerResponse = new AnswerResponse();

	/**
	 * @return Answer
	 */
	public AnswerResponse getAnswerResponse() {
		return answerResponse;
	}

	/**
	 * @param answerResponse Answer
	 */
	public void setAnswerResponse(AnswerResponse answerResponse) {
		this.answerResponse = answerResponse;
	}

}
