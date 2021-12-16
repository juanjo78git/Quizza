package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.Answer;

/**
 * @author juanjo78git
 *
 */
public class AnswerResponse {

	private List<Answer> answer;

	/**
	 * @return Answer
	 */
	public List<Answer> getAnswer() {
		return answer;
	}

	/**
	 * @param answer Answer
	 */
	public void setAnswer(List<Answer> answer) {
		this.answer = answer;
	}
	
}
