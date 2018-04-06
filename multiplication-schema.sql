-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.7.16-log - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.4.0.5145
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para social_multiplication
CREATE DATABASE IF NOT EXISTS `social_multiplication` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `social_multiplication`;

-- Copiando estrutura para tabela social_multiplication.multiplication
CREATE TABLE IF NOT EXISTS `multiplication` (
  `multiplication_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `factora` int(11) NOT NULL,
  `factorb` int(11) NOT NULL,
  PRIMARY KEY (`multiplication_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- Exportação de dados foi desmarcado.
-- Copiando estrutura para tabela social_multiplication.multiplication_result_attempt
CREATE TABLE IF NOT EXISTS `multiplication_result_attempt` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `correct` bit(1) NOT NULL,
  `result_attempt` int(11) NOT NULL,
  `multiplication_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe3muslfsmu52owmnxstl74kfm` (`multiplication_id`),
  KEY `FKmtjm5i6h07ies514q9bqr3jgu` (`user_id`),
  CONSTRAINT `FKe3muslfsmu52owmnxstl74kfm` FOREIGN KEY (`multiplication_id`) REFERENCES `multiplication` (`multiplication_id`),
  CONSTRAINT `FKmtjm5i6h07ies514q9bqr3jgu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- Exportação de dados foi desmarcado.
-- Copiando estrutura para tabela social_multiplication.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Exportação de dados foi desmarcado.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
