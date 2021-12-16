package com.quizza.backend.responses;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * @author juanjo78git
 *
 */
public class ResponseRest {

	private ArrayList<HashMap<String, String>> metadata = new ArrayList<>();
	
	/**
	 * @return Metadata
	 */
	public ArrayList<HashMap<String, String>> getMetadata() {
		return metadata;
	}
	
	/**
	 * @param type Tipo
	 * @param code Codigo
	 * @param data Datos
	 */
	public void setMetadata(String type, String code, String data) {
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("type", type);
		map.put("id", code);
		map.put("data", data);
		
		metadata.add(map);
		
	}
}
