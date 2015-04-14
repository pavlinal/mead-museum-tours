-- MySQL dump 10.13  Distrib 5.5.41, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: meadmuseum
-- ------------------------------------------------------
-- Server version	5.5.41-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `objects`
--

DROP TABLE IF EXISTS `objects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `objects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(2024) DEFAULT NULL,
  `makers` varchar(1024) DEFAULT NULL,
  `culture` varchar(1024) DEFAULT NULL,
  `location` varchar(1024) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `materials` varchar(250) DEFAULT NULL,
  `measurements` varchar(1024) DEFAULT NULL,
  `asc_num` varchar(20) DEFAULT NULL,
  `credit_line` varchar(30) DEFAULT NULL,
  `desc` text,
  `room` varchar(20) DEFAULT NULL,
  `pic` mediumblob,
  `sound` mediumblob,
  `video` varchar(2024) DEFAULT NULL,
  `tour` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objects`
--

LOCK TABLES `objects` WRITE;
/*!40000 ALTER TABLE `objects` DISABLE KEYS */;
INSERT INTO `objects` VALUES (1,'chimu whistling vessel with humanoid monkey','Unknown Pre-Columbian, Chimu','South America; Peru',NULL,NULL,'ceramic','Overall: 5 13/16 in x 7 7/16in','AC 1991.50','Gift',NULL,'1',NULL,NULL,NULL,1),(2,'  Confidence and Admiration','  Johnson, Eastman ','  American (1824-1906)','  United States; Washington, DC','  ca. 1859',' oil on canvas',' stretcher: 11 1/4 x 9 1/8 in.; 28.575 x 23.1775 cm; frame: 16 1/4 x 14 3/8 x 2 5/8 in.; 41.275 x 36.5125 x 6.6675 cm',' AC 1958.48 ',' Museum purchase',NULL,' 1 ',NULL,NULL,NULL,1),(3,' The Poet(Le poete)','  Falguiere, Jean Alexandre',' French (1831-1900)',NULL,'1897','  bronze',NULL,' AC 1974.2',' Museum purchase',' 1 ',NULL,NULL,NULL,' 1 ',1),(4,' Belt (nkody makwoom)',' Unknown African; Congolese(Zairian);',' Kuba people ',' Africa; Democratic Republic of Congo','  20th century ','  cowrie shells, glass beads, fiber',' overall: 55 x 2 in; 139.7 x 5.08cm ','  AC 2000.84 ','Gift of Gilbert and Roda Graha',NULL,' 1 ',NULL,NULL,NULL,1),(5,' The Triumph of Amphitrite',' Taraval, Hughes',' French(1729-1785)',NULL,' oil on canvas',' Stretcher: 50 15/16 in x 38 1/4 in; 139.38125 cm x 97.155cm','  AC 1976.2',' Purchased in honor ',NULL,' 1',NULL,NULL,NULL,' 1 ',1),(6,' Landscape with Overturned Wagon in a Storm ',' Loutherbourg, Philippe Jacques de',' French(1740-1812)',NULL,' 1809 ',' oil on canvas','   stretcher: 28 1/4 x 41 1/2\"; frame: 41 x 54 1/8 x 4 1/4\" ','   AC 1974.30',' Purchased in honor of Susan D',NULL,'  1 ',NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `objects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `desc` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'1','test room');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tour`
--

DROP TABLE IF EXISTS `tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `desc` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour`
--

LOCK TABLES `tour` WRITE;
/*!40000 ALTER TABLE `tour` DISABLE KEYS */;
INSERT INTO `tour` VALUES (1,'1','test tour');
/*!40000 ALTER TABLE `tour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tour_stop`
--

DROP TABLE IF EXISTS `tour_stop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tour_stop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tour_id` int(11) DEFAULT NULL,
  `obj_id` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour_stop`
--

LOCK TABLES `tour_stop` WRITE;
/*!40000 ALTER TABLE `tour_stop` DISABLE KEYS */;
INSERT INTO `tour_stop` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3),(4,1,4,4),(5,1,5,5),(6,1,6,6);
/*!40000 ALTER TABLE `tour_stop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-03-05 10:38:36
