package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.BookmarkHistory;

/**
 * @author juanjo78git
 *
 */
public interface IBookmarkHistoryDao extends CrudRepository<BookmarkHistory, Long>{

}
