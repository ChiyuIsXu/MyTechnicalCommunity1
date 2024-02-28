DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PASSWORD VARCHAR(255) NOT NULL,
  phonenum VARCHAR(255) DEFAULT NULL,
  email VARCHAR(255) DEFAULT NULL,
  avatar_url VARCHAR(255) DEFAULT NULL,
  intro VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb3;

INSERT INTO users(username,PASSWORD) VALUES ('jiuxia211','123456');

CREATE TABLE articles (
  id INT NOT NULL AUTO_INCREMENT,
  auther_id INT NOT NULL,
  cover_url VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  commentnum INT DEFAULT 0,
  clicknum INT DEFAULT 0,
  likenum INT DEFAULT 0,
  update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb3;

INSERT INTO articles(auther_id,cover_url,title,content) VALUES ("1","www.baidu.com","百度","jsaljdflkjakfjk")

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  auther_id INT NOT NULL,
  article_id INT DEFAULT -1,
  parent_id INT DEFAULT -1,
  likenum INT DEFAULT 0,
  child_count INT DEFAULT 0,
  content TEXT NOT NULL,
  update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb3;

CREATE TABLE likes (
  user_id INT NOT NULL,
  article_id INT DEFAULT -1,
  comment_id INT DEFAULT -1,
  PRIMARY KEY (user_id)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb3;