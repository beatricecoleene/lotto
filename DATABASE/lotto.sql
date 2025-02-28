-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: lotto
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bets`
--

DROP TABLE IF EXISTS `bets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bets` (
  `bet_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `numbers` varchar(60) NOT NULL,
  `coins` int NOT NULL DEFAULT '20',
  `placed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `round_id` int DEFAULT NULL,
  `status` enum('Pending','Won','Lost') DEFAULT 'Pending',
  PRIMARY KEY (`bet_id`),
  KEY `user_id` (`user_id`),
  KEY `round_id` (`round_id`),
  CONSTRAINT `bets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `bets_ibfk_2` FOREIGN KEY (`round_id`) REFERENCES `rounds` (`round_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bets`
--

LOCK TABLES `bets` WRITE;
/*!40000 ALTER TABLE `bets` DISABLE KEYS */;
/*!40000 ALTER TABLE `bets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prizes`
--

DROP TABLE IF EXISTS `prizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prizes` (
  `prize_id` int NOT NULL AUTO_INCREMENT,
  `round_id` int NOT NULL,
  `prize_amount` int NOT NULL DEFAULT '1000',
  PRIMARY KEY (`prize_id`),
  KEY `round_id` (`round_id`),
  CONSTRAINT `round_id` FOREIGN KEY (`round_id`) REFERENCES `rounds` (`round_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prizes`
--

LOCK TABLES `prizes` WRITE;
/*!40000 ALTER TABLE `prizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `prizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rounds`
--

DROP TABLE IF EXISTS `rounds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rounds` (
  `round_id` int NOT NULL AUTO_INCREMENT,
  `winning_numbers` varchar(20) NOT NULL,
  `draw_time` datetime NOT NULL,
  PRIMARY KEY (`round_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rounds`
--

LOCK TABLES `rounds` WRITE;
/*!40000 ALTER TABLE `rounds` DISABLE KEYS */;
/*!40000 ALTER TABLE `rounds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `contact_num` varchar(11) NOT NULL,
  `coins` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'hi','whuu','hihii','2000-01-01','123456789',0),(2,'heyboy','ima getcha','ima get you real good and i betcha','2000-01-01','123456789',0),(3,'bea','bea@gmail.com','f72df03dbd738c40a3561c8e7c5129c78aa22d0abcd9713988fcd79de53f4a42','2000-01-01','123456789',0),(5,'beatrice','bea1@gmail.com','78b7035cf7a238b5511002e8a50a1b153edad17829d16f2a641aed68dd61940a','2000-01-01','123456789',0),(6,'bea2','bea2@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(8,'bea3','bea3@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(9,'bea4','bea4@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(10,'bea5','bea5@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(11,'bea6','bea6@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(12,'bea7','bea7@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(13,'bea8','bea8@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(14,'bea9','bea9@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(15,'bea10','bea10@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0),(16,'bea11','bea11@gmail.com','188ceb77dc8d0ada081927309a2a6237e2e83cb50e277efd0709364f7d308117','2000-01-01','123456789',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-28 18:51:53
