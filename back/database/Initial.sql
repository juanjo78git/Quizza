-- PostgreSQL

insert into users (id, enabled, password, username) values (1,'true','$2a$10$Em8QITwpvumHHi39bsG7n.lqCGJ3O3ik9nj8yRZbkkjqGYp6DHf56','user1');
insert into users (id, enabled, password, username) values (2,'true','$2a$10$mhuhowb7aZDhW8BcZncVQOhUOaM6oq.KwXrxzgCS1s134tJrOYEwO','admin');
insert into users (id, enabled, password, username) values (3,'true','$2a$10$PX0OEvLEDjytc/WKBIVZrusPNRga/KcYebOpICNasrbMNAxbLOPIO','user3');
insert into roles (id, nombre) values (1,'ROLE_USER');
insert into roles (id, nombre) values (2,'ROLE_ADMIN');
insert into users_roles (user_id, role_id) values (1,1);
insert into users_roles (user_id, role_id) values (2,1);
insert into users_roles (user_id, role_id) values (2,2);
insert into users_roles (user_id, role_id) values (3,1);
