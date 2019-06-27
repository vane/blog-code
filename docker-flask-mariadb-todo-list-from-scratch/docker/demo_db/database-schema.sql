DROP TABLE IF EXISTS `todo_list`;
CREATE TABLE `todo_list` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`title` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`description` text COLLATE utf8mb4_unicode_ci,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`is_done` tinyint(1) DEFAULT '0',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;