-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2020 at 03:37 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `get_talent`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `acc_id` int(10) UNSIGNED NOT NULL,
  `acc_nama` varchar(50) NOT NULL,
  `acc_email` varchar(50) NOT NULL,
  `acc_phone` varchar(20) NOT NULL,
  `acc_password` varchar(100) NOT NULL,
  `acc_level` int(11) NOT NULL,
  `acc_createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `acc_updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`acc_id`, `acc_nama`, `acc_email`, `acc_phone`, `acc_password`, `acc_level`, `acc_createdAt`, `acc_updateAt`) VALUES
(1, 'Al Lukman', 'lukman18@gmail.com', '087627638174', '$2b$10$vWEaWcoyFatjeObDtYknUuJL1RdO4QCbIUVDMgXydQzApxuVBfHuW', 1, '2020-12-31 12:16:34', '2020-12-31 12:16:34'),
(2, 'Hafidz Sutiawan', 'hafidz11@gmail.com', '087627638174', '$2b$10$vyzaAtdyH1SONE2xTpDaBuTAeZRWhgnGEjd1vCQm8tgVB.qvRON4.', 1, '2020-12-31 12:17:40', '2020-12-31 12:17:40'),
(3, 'Carla Estes', 'carla95@gmail.com', '087621312369', '$2b$10$zny8QcYi5VVrN7S0t92hmOw6Y8iOTuosBQ.52tgtEkV6ztQin4eR.', 1, '2020-12-31 12:18:23', '2020-12-31 12:18:23'),
(4, 'Nurul syifa', 'nurul45@gmail.com', '087682739615', '$2b$10$gPMv3crwYvVN3SbVy2MN4.oE.PyTC350bNWV9VMR5EeQBYGKENS7y', 1, '2020-12-31 12:19:07', '2020-12-31 12:19:07'),
(5, 'Muhammad fajri', 'fajri13@gmail.com', '087622137768', '$2b$10$TOzpH1cAOdDzLNSyTkZzSeT9.IrSQjCvOjEYMXCkWf8MqrRbHSy2W', 1, '2020-12-31 12:29:06', '2020-12-31 12:29:06'),
(6, 'Nadia Putri', 'nadia27@gmail.com', '087611231758', '$2b$10$H7c3jWaD5ZBJMv3p5bwI2uXe0tKO5F.A42FCxHFsWDp1WiZeLcZuq', 1, '2020-12-31 12:29:37', '2020-12-31 12:29:37'),
(7, 'Dona Marcela', 'dona17@gmail.com', '087612312314', '$2b$10$33w31SaBFfqWQ7rT5Qespu3CzWILmqql801.GqYXAYGvvqukvCymO', 1, '2020-12-31 12:30:43', '2020-12-31 12:30:43'),
(8, 'Bondan Wicaksono', 'bondan26@gmail.com', '087612312314', '$2b$10$6.FfXAnqwDij5zWSIyooZOBeyOtmBzCrSt4OcMtcWwIrK5N5LaNOG', 1, '2020-12-31 12:31:15', '2020-12-31 12:31:15'),
(9, 'Putra Dzulfikar', 'putra90@gmail.com', '087612312314', '$2b$10$qv3nQY014gFcg19QtNAzYuCxdT4rUxusl6yZNNPlBw/rIr5H4F19.', 1, '2020-12-31 12:31:57', '2020-12-31 12:31:57'),
(10, 'Abima Ardiansyah', 'abima08@gmail.com', '087723122345', '$2b$10$pN8EtKhumT6a1cyfKgs2.uBd.GeIfarNDDWXIdDJ47A9KV8hejPji', 2, '2020-12-31 12:33:06', '2020-12-31 12:33:06'),
(11, 'Rehan firmansyah', 'rehan11@gmail.com', '087723122345', '$2b$10$ieAW6m5XNJ20Q5NIqsZdQuRZbiKGWPXr8RLqJa6G80gr5tOP32JkC', 2, '2020-12-31 12:33:53', '2020-12-31 12:33:53'),
(12, 'Ian purnomo', 'purnomo1@gmail.com', '087723122345', '$2b$10$G4CaJNo7zEGlnkawBovCAeHnNDAtxUwawJUpOatzs9SWyhA9XJLsW', 2, '2020-12-31 12:34:28', '2020-12-31 12:34:28'),
(13, 'Erlangga sufico', 'erlangga07@gmail.com', '087723122345', '$2b$10$Vgt1R.NGE3ANq/XmjheBEeKoOAKKi9YvduzxAejGHTjSd/.Q90G0C', 2, '2020-12-31 12:35:23', '2020-12-31 12:35:23'),
(14, 'Iis cantika', 'iis88@gmail.com', '087723122345', '$2b$10$Dc57.W1NNr4UL4Pv1UeHquRFZU3ufabKFSU9DNIgkmq.2lCUK1e1K', 2, '2020-12-31 12:36:04', '2020-12-31 12:36:04'),
(15, 'yayan ruhiyan', 'yayan66@gmail.com', '087723122345', '$2b$10$DCW.Cnt7JY9fHvyuDDpVm.nFi6Vv3QjnoW5HsxRn8W4BG/IOcDnvy', 2, '2020-12-31 12:36:44', '2020-12-31 12:36:44'),
(16, 'Admin', 'admin@gmail.com', '087612312314', '$2b$10$e1EueEP9Dh7nNQgpa6sG3uNxbXzT8EAluoBT3DBBt2NnJzn93NQ8m', 0, '2020-12-31 12:37:45', '2020-12-31 12:37:45');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `com_id` int(10) UNSIGNED NOT NULL,
  `acc_id` int(10) UNSIGNED NOT NULL,
  `com_company` varchar(100) DEFAULT NULL,
  `com_position` varchar(50) DEFAULT NULL,
  `com_bidang` varchar(50) DEFAULT NULL,
  `com_city` varchar(50) DEFAULT NULL,
  `com_description` text DEFAULT NULL,
  `com_instagram` varchar(50) DEFAULT NULL,
  `com_linkedin` varchar(50) DEFAULT NULL,
  `com_github` varchar(50) DEFAULT NULL,
  `com_photo` text DEFAULT NULL,
  `com_createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `com_updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`com_id`, `acc_id`, `com_company`, `com_position`, `com_bidang`, `com_city`, `com_description`, `com_instagram`, `com_linkedin`, `com_github`, `com_photo`, `com_createAt`, `com_updateAt`) VALUES
(1, 10, 'PT. PLN ', 'Human resource', 'industri', 'jakarta', '-', '-', '-', '-', 'photo-1609420757707.jpg', '2020-12-31 12:33:06', '2020-12-31 12:33:06'),
(2, 11, 'PT. MENCARI CINTA SEJARI', 'Manajer', 'elektronik', 'jakarta', '-', '-', '-', '-', 'photo-1609420786972.jpg', '2020-12-31 12:33:53', '2020-12-31 12:33:53'),
(3, 12, 'PT. ANGKASA RAYA', 'Manajer', 'industri', 'bandung', '-', '-', '-', '-', 'photo-1609420889212.jpg', '2020-12-31 12:34:28', '2020-12-31 12:34:28'),
(4, 13, 'PT. CITRA SEJAHTERA', 'Manajer', 'Industri', 'jakarta', '-', '-', '-', '-', 'photo-1609420999820.jpg', '2020-12-31 12:35:23', '2020-12-31 12:35:23'),
(5, 14, 'PT. HSP NET', 'Manajer', 'Internet provider', 'jakarta', '-', '-', '-', '-', 'photo-1609420972673.jpg', '2020-12-31 12:36:04', '2020-12-31 12:36:04'),
(6, 15, 'PT. MENCARI LAWAN', 'Human resource', 'Elektronik', 'bandung', '-', '-', '-', '-', 'photo-1609421042007.jpg', '2020-12-31 12:36:44', '2020-12-31 12:36:44');

-- --------------------------------------------------------

--
-- Table structure for table `engineer`
--

CREATE TABLE `engineer` (
  `en_id` int(11) UNSIGNED NOT NULL,
  `acc_id` int(11) UNSIGNED NOT NULL,
  `en_job_title` varchar(50) NOT NULL DEFAULT 'web developer',
  `en_job_type` enum('freelance','fulltime') NOT NULL DEFAULT 'fulltime',
  `en_domisili` varchar(50) DEFAULT NULL,
  `en_deskripsi` text DEFAULT NULL,
  `en_photo` text DEFAULT NULL,
  `en_instagram` varchar(50) DEFAULT NULL,
  `en_github` varchar(50) DEFAULT NULL,
  `en_gitlab` varchar(50) DEFAULT NULL,
  `en_createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `en_updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`en_id`, `acc_id`, `en_job_title`, `en_job_type`, `en_domisili`, `en_deskripsi`, `en_photo`, `en_instagram`, `en_github`, `en_gitlab`, `en_createAt`, `en_updateAt`) VALUES
(1, 1, 'android developer', 'fulltime', 'Jakarta', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419393332.jpg', 'allukman_18', 'allukman18', 'allukman18', '2020-12-31 12:16:34', '2020-12-31 12:16:34'),
(2, 2, 'web developer', 'freelance', 'Bandung', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419473872.jpg', 'hafidz_11', 'hafidz11', 'hafidz11', '2020-12-31 12:17:40', '2020-12-31 12:17:40'),
(3, 3, 'web developer', 'fulltime', 'surabaya', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419526937.jpg', 'carla_95', 'carla95', 'carla95', '2020-12-31 12:18:23', '2020-12-31 12:18:23'),
(4, 4, 'android developer', 'fulltime', 'makasar', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419572324.jpg', 'nurul_45', 'nurul45', 'nurul45', '2020-12-31 12:19:07', '2020-12-31 12:19:07'),
(5, 5, 'android developer', 'fulltime', 'manado', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419607521.jpg', 'fajri_13', 'fajri13', 'fajri13', '2020-12-31 12:29:06', '2020-12-31 12:29:06'),
(6, 6, 'web developer', 'freelance', 'bekasi', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', NULL, 'nadia_27', 'nadia27', 'nadia27', '2020-12-31 12:29:37', '2020-12-31 12:29:37'),
(7, 7, 'web developer', 'fulltime', 'jakarta', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419716872.jpg', 'dona_17', 'dona17', 'dona17', '2020-12-31 12:30:43', '2020-12-31 12:30:43'),
(8, 8, 'web developer', 'fulltime', 'Aceh', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419763577.jpg', 'bondan_26', 'bondan26', 'bondan26', '2020-12-31 12:31:15', '2020-12-31 12:31:15'),
(9, 9, 'web developer', 'fulltime', 'Palembang', 'Saya adalah orang yang bisa mengambil keputusan dengan cepat dan tepat, bahkan saat berada pada situasi genting atau di bawah tekanan.', 'photo-1609419827903.jpg', 'putra_90', 'putra90', 'putra90', '2020-12-31 12:31:57', '2020-12-31 12:31:57');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `ex_id` int(10) UNSIGNED NOT NULL,
  `en_id` int(10) UNSIGNED NOT NULL,
  `ex_posisi` varchar(50) NOT NULL,
  `ex_company` varchar(100) NOT NULL,
  `ex_start` date NOT NULL,
  `ex_end` date NOT NULL,
  `ex_deskripsi` text NOT NULL,
  `ex_photo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`ex_id`, `en_id`, `ex_posisi`, `ex_company`, `ex_start`, `ex_end`, `ex_deskripsi`, `ex_photo`) VALUES
(1, 1, 'software analiyst', 'PT. EKA TUNGGAL SENTOSA', '2019-12-10', '2020-01-20', '-', 'photo-1609422769020.png'),
(2, 1, 'software engineer', 'PT. SUKA DUKA', '2019-12-10', '2020-01-20', '-', 'photo-1609422840777.png'),
(3, 2, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422857356.png'),
(4, 2, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422858551.png'),
(5, 3, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422862251.png'),
(6, 3, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422862923.png'),
(7, 4, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422866027.png'),
(8, 4, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422866506.png'),
(9, 5, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422869703.png'),
(10, 5, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422870160.png'),
(11, 6, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422873127.png'),
(12, 6, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422873528.png'),
(13, 7, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422876729.png'),
(14, 7, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422877136.png'),
(15, 8, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422879655.png'),
(16, 8, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422880118.png'),
(17, 9, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422883541.png'),
(18, 9, 'software engineer', 'PT. TOKOPEDIA', '2019-12-10', '2020-01-20', '-', 'photo-1609422883832.png');

-- --------------------------------------------------------

--
-- Table structure for table `hire`
--

CREATE TABLE `hire` (
  `hr_id` int(10) UNSIGNED NOT NULL,
  `en_id` int(10) UNSIGNED NOT NULL,
  `pj_id` int(10) UNSIGNED NOT NULL,
  `hr_price` bigint(12) NOT NULL,
  `hr_message` text NOT NULL,
  `hr_status` enum('wait','reject','approve') NOT NULL,
  `hr_date_confirm` timestamp NOT NULL DEFAULT current_timestamp(),
  `hr_createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hire`
--

INSERT INTO `hire` (`hr_id`, `en_id`, `pj_id`, `hr_price`, `hr_message`, `hr_status`, `hr_date_confirm`, `hr_createdAt`) VALUES
(1, 1, 1, 1000000, 'membuat aplikasi pencari jodoh', 'approve', '0000-00-00 00:00:00', '2020-12-31 14:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `pr_id` int(10) UNSIGNED NOT NULL,
  `en_id` int(10) UNSIGNED NOT NULL,
  `pr_aplikasi` varchar(50) NOT NULL,
  `pr_deskripsi` text NOT NULL,
  `pr_link_pub` varchar(100) NOT NULL,
  `pr_link_repo` varchar(100) NOT NULL,
  `pr_tp_kerja` varchar(100) NOT NULL,
  `pr_type` enum('aplikasi web','aplikasi mobile') NOT NULL,
  `pr_photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`pr_id`, `en_id`, `pr_aplikasi`, `pr_deskripsi`, `pr_link_pub`, `pr_link_repo`, `pr_tp_kerja`, `pr_type`, `pr_photo`) VALUES
(1, 1, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423443194.png'),
(2, 2, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423456707.jpg'),
(3, 3, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423470407.png'),
(4, 4, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423481956.png'),
(5, 5, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423492840.png'),
(6, 6, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423503513.png'),
(7, 7, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423513819.png'),
(8, 8, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423524812.png'),
(9, 9, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-1609423533623.png'),
(10, 1, 'aplikasi layanan tiket ', 'membuat aplikasi layanan tiket dengan java', '-', '-', '-', 'aplikasi mobile', 'photo-1609423646267.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `pj_id` int(10) UNSIGNED NOT NULL,
  `com_id` int(10) UNSIGNED NOT NULL,
  `pj_nama_project` varchar(100) NOT NULL,
  `pj_deskripsi` text NOT NULL,
  `pj_deadline` date NOT NULL,
  `pj_gambar` text NOT NULL,
  `pj_createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `pj_updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pj_id`, `com_id`, `pj_nama_project`, `pj_deskripsi`, `pj_deadline`, `pj_gambar`, `pj_createAt`, `pj_updateAt`) VALUES
(1, 1, 'aplikasi pencari jodoh', 'membuat aplikasi pencari jodoh', '2021-09-09', 'photo-1609423706047.png', '2020-12-31 14:08:26', '2020-12-31 14:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `sk_id` int(10) UNSIGNED NOT NULL,
  `en_id` int(10) UNSIGNED NOT NULL,
  `sk_nama_skill` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`sk_id`, `en_id`, `sk_nama_skill`) VALUES
(1, 1, 'php'),
(2, 1, 'kotlin'),
(3, 1, 'javascript'),
(4, 1, 'node js'),
(5, 1, 'java'),
(6, 2, 'c'),
(7, 2, 'c++'),
(8, 3, 'PHP'),
(9, 3, 'Visual Basic'),
(10, 3, 'Grovy'),
(11, 4, 'Python'),
(12, 4, 'Java'),
(13, 5, 'Javascript'),
(14, 5, 'Ruby'),
(15, 6, 'Perl'),
(16, 6, 'Go'),
(17, 7, 'Go'),
(18, 7, 'Python'),
(19, 7, 'PHP'),
(20, 8, 'Java'),
(21, 8, 'kotlin'),
(22, 9, 'Visual basic'),
(23, 9, 'Perl');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`acc_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`com_id`),
  ADD KEY `acc_id` (`acc_id`);

--
-- Indexes for table `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`en_id`),
  ADD KEY `acc_id` (`acc_id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`ex_id`),
  ADD KEY `en_id` (`en_id`);

--
-- Indexes for table `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`hr_id`),
  ADD KEY `en_id` (`en_id`),
  ADD KEY `pj_id` (`pj_id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`pr_id`),
  ADD KEY `en_id` (`en_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pj_id`),
  ADD KEY `com_id` (`com_id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`sk_id`),
  ADD KEY `en_id` (`en_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `acc_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `com_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `en_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `ex_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `hr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `pr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pj_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `sk_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`acc_id`) REFERENCES `account` (`acc_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `engineer`
--
ALTER TABLE `engineer`
  ADD CONSTRAINT `engineer_ibfk_1` FOREIGN KEY (`acc_id`) REFERENCES `account` (`acc_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hire`
--
ALTER TABLE `hire`
  ADD CONSTRAINT `hire_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hire_ibfk_2` FOREIGN KEY (`pj_id`) REFERENCES `project` (`pj_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD CONSTRAINT `portofolio_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`com_id`) REFERENCES `company` (`com_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `skill`
--
ALTER TABLE `skill`
  ADD CONSTRAINT `skill_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
