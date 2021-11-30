package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.Answer;

public class AnswerResponse {

	private List<Answer> answer;

	public List<Answer> getAnswer() {
		return answer;
	}

	public void setAnswer(List<Answer> answer) {
		this.answer = answer;
	}
	
}
