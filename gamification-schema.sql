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


-- Copiando estrutura do banco de dados para gamification
CREATE DATABASE IF NOT EXISTS `gamification` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gamification`;

-- Copiando estrutura para tabela gamification.badge_card
CREATE TABLE IF NOT EXISTS `badge_card` (
  `badge_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `badge` int(11) DEFAULT NULL,
  `badge_timestamp` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`badge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Exportação de dados foi desmarcado.
-- Copiando estrutura para tabela gamification.score_card
CREATE TABLE IF NOT EXISTS `score_card` (
  `card_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `attempt_id` bigint(20) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `score_ts` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`card_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- Exportação de dados foi desmarcado.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
