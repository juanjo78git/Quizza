package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.BookmarkHistory;

public interface IBookmarkHistoryDao extends CrudRepository<BookmarkHistory, Long>{

}
