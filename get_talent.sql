-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2020 at 02:32 AM
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
(38, 'bambang', 'bambang@gmail.com', '081728371284', 'pw1234aa', 1, '2020-11-18 00:44:53', '2020-11-18 00:44:53'),
(39, 'alam saka', 'alamsaka231@gmail.com', '081231271231', 'alamalam1', 1, '2020-11-18 00:46:39', '2020-11-18 00:46:39'),
(40, 'abima ardiansyah', 'abima.ardiansyah@gmail.com', '081412312412', 'abima1928', 1, '2020-11-18 00:47:15', '2020-11-18 00:47:15'),
(41, 'zenosyne', 'zenosyna12@gmail.com', '081400981231', 'zenzenzen', 1, '2020-11-18 00:48:25', '2020-11-18 00:48:25'),
(42, 'leviathan', 'leviathan@gmail.com', '081423152142', 'levi28901', 1, '2020-11-18 00:49:04', '2020-11-18 00:49:04'),
(43, 'suripto', 'suripto@gmail.com', '08213871823', 'suripto', 2, '2020-11-18 00:49:32', '2020-11-18 00:49:32'),
(44, 'bambang sutijo', 'bambang213@gmail.com', '082121232359', 'bambang12345', 2, '2020-11-18 00:50:35', '2020-11-18 00:50:35'),
(45, 'joko', 'joko@gmail.com', '081728371284', '$2b$10$uOoV2.aCfESDHyb/0rTPPuqT/da4e6jp83/11pPROP5crY9XhsH66', 1, '2020-11-18 00:51:50', '2020-11-18 00:51:50'),
(46, 'ujang', 'ujang231@gmail.com', '082198239816', '$2b$10$wuEt5sv05aaWN5I.mTGe.u6dzzuhpn5Sj1shg.NvjnZYk9lebqo3i', 1, '2020-11-18 11:48:49', '2020-11-18 11:48:49'),
(48, 'ucup', 'ucup231@gmail.com', '081231829345', '$2b$10$O6.SrPFZQRwVT5Vb2/0GpeAhAdE0MF7C6DicaDdg3orTXbsLQELLq', 2, '2020-11-18 12:00:38', '2020-11-18 12:00:38'),
(49, 'ucup', 'ucup1@gmail.com', '081231829345', '$2b$10$Xc5KoCNBZbWJvii002CFIeqeE8ovFgdzabVFrgfZvTeb.zXVKlHQy', 2, '2020-11-18 12:09:38', '2020-11-18 12:09:38'),
(51, 'ucup', 'ucup2@gmail.com', '081231829345', '$2b$10$GW4srgx9vOqeGegOZDD4HexRvloc7sMFzgP/wp/KE4kxY5rjm7Ysq', 2, '2020-11-18 12:11:47', '2020-11-18 12:11:47'),
(52, 'ucup', 'ucup3@gmail.com', '081231829345', '$2b$10$m2Ppdg.nOu.fnVJH3JWE8.AQotF61ylaVAPxX1HqehTgM97jHhpfm', 2, '2020-11-18 12:12:30', '2020-11-18 12:12:30'),
(54, 'joko susilo', 'joko22@gmail.com', '08221321324', '$2b$10$aNx.GGJk5a7OD.XIhnMufeO2GmlWOQzQoXiahdbXp1zvR.JV3zBNm', 2, '2020-11-18 12:15:07', '2020-11-18 12:15:07'),
(55, 'leviathan', 'leviathan@gmail.com', '081423152142', '$2b$10$5FGC9jGaYkcjpIzDLKSunuFMSgfTklRZxqLz.YvhJ95pRMGTNdPyO', 1, '2020-11-18 12:34:34', '2020-11-18 12:34:34'),
(56, 'leviathan', 'leviathan1@gmail.com', '081423152142', '$2b$10$FdD62E4ov06fxQgObKVPEeF6DY5Ipn/fRKTgH4i1wM99t9MdFnDCK', 1, '2020-11-18 13:21:48', '2020-11-18 13:21:48'),
(57, 'lukman', 'lukman1@gmail.com', '081423152142', '$2b$10$fXO2s8ppSDYrjS6mvEnHTuyOgLlpxGgUj7hN9QZMQ0j8lwRfV0mte', 1, '2020-11-19 03:14:06', '2020-11-19 03:14:06'),
(58, 'lukman2', 'lukman2@gmail.com', '08221321324', '$2b$10$Yo/zmXJS35F6vUotJWMxMuhuBVUC81y90YF3Pf5YIDWb6RIliqPVu', 2, '2020-11-19 03:16:16', '2020-11-19 03:16:16'),
(59, 'lukman3', 'lukman3@gmail.com', '081728371284', '$2b$10$lTyIwv.JWCO48dBjPnt/9.rVwHNt/Hc8sKSflan4tli8sBqu6XuTC', 0, '2020-11-19 03:39:56', '2020-11-19 03:39:56'),
(60, 'lukman2', 'lukman7@gmail.com', '08221321324', '$2b$10$d9qp99Z3Da3sXXShJ1OON.Iy1uXicjLPVIO2QigVKD4BLblCFcEZW', 2, '2020-12-30 00:52:09', '2020-12-30 00:52:09'),
(61, 'lukman', 'lukman6@gmail.com', '081423152142', '$2b$10$8s6eR0FcrHCs7wFegz9OXOlUydIGeyX11.ErjaoZj93ovaU5IX50W', 1, '2020-12-30 00:52:15', '2020-12-30 00:52:15');

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
  `com_photo` text DEFAULT NULL,
  `com_createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `com_updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`com_id`, `acc_id`, `com_company`, `com_position`, `com_bidang`, `com_city`, `com_description`, `com_instagram`, `com_linkedin`, `com_photo`, `com_createAt`, `com_updateAt`) VALUES
(8, 43, 'PT. MENCARI CINTA SEJATI', 'manager', 'elektronik', 'bandung', '-', '-', '-', '-', '2020-11-18 00:49:32', '2020-11-18 00:49:32'),
(9, 44, 'PT. INDONESIA MENCARI BAKAT', 'Human resource', 'software', 'jakarta', '-', '-', '-', '-', '2020-11-18 00:50:35', '2020-11-18 00:50:35'),
(10, 45, 'PT. CITRA SEJAHTERA 3', 'Human resource', 'industri', 'jakarta', '-', '-', '-', 'photo-1608866372720.png', '2020-11-18 00:51:50', '2020-11-18 00:51:50'),
(11, 48, 'PT.MENCARI BAKAT', 'manager', '', '', '', '', '', '', '2020-11-18 12:00:38', '2020-11-18 12:00:38'),
(12, 49, 'PT.MENCARI BAKAT', 'manager', '', '', '', '', '', '', '2020-11-18 12:09:38', '2020-11-18 12:09:38'),
(14, 51, 'PT.MENCARI BAKAT', 'manager', '', '', '', '', '', '', '2020-11-18 12:11:47', '2020-11-18 12:11:47'),
(15, 52, 'PT.MENCARI BAKAT', 'manager', '', '', '', '', '', '', '2020-11-18 12:12:30', '2020-11-18 12:12:30'),
(16, 54, 'PT . SURYA CITRA LESTARI', 'Human resource', '', '', '', '', '', '', '2020-11-18 12:15:07', '2020-11-18 12:15:07'),
(17, 58, 'PT . SURYA CITRA LESTARI', 'Human resource', '', '', '', '', '', '', '2020-11-19 03:16:16', '2020-11-19 03:16:16'),
(18, 60, 'PT . SURYA CITRA LESTARI', 'Human resource', '', '', '', '', '', '', '2020-12-30 00:52:09', '2020-12-30 00:52:09');

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
  `en_createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `en_updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`en_id`, `acc_id`, `en_job_title`, `en_job_type`, `en_domisili`, `en_deskripsi`, `en_photo`, `en_createAt`, `en_updateAt`) VALUES
(9, 38, 'android developer', '', '', '', 'photo-1608864279219.png', '2020-11-18 00:44:53', '2020-11-18 00:44:53'),
(10, 39, 'web developer', '', '', '', '', '2020-11-18 00:46:39', '2020-11-18 00:46:39'),
(11, 40, 'android developer', '', '', '', '', '2020-11-18 00:47:15', '2020-11-18 00:47:15'),
(12, 41, '', 'fulltime', 'makassar', '', 'photo-1609200264547.png', '2020-11-18 00:48:25', '2020-11-18 00:48:25'),
(13, 42, '', 'fulltime', 'surabaya', '', 'photo-1609200251961.png', '2020-11-18 00:49:04', '2020-11-18 00:49:04'),
(16, 55, '', 'fulltime', 'palembang', '', 'photo-1609199363706.png', '2020-11-18 12:34:34', '2020-11-18 12:34:34'),
(17, 56, '', 'fulltime', '', '', 'photo-1609200131133.png', '2020-11-18 13:21:48', '2020-11-18 13:21:48'),
(18, 57, 'web developer', 'freelance', 'manado', '', 'photo-1609200175379.png', '2020-11-19 03:14:06', '2020-11-19 03:14:06'),
(19, 61, '', 'freelance', '', '', '', '2020-12-30 00:52:15', '2020-12-30 00:52:15');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `ex_id` int(10) UNSIGNED NOT NULL,
  `en_id` int(10) UNSIGNED NOT NULL,
  `ex_posisi` varchar(50) NOT NULL,
  `ex_perusahaan` varchar(100) NOT NULL,
  `ex_start` date NOT NULL,
  `ex_end` date NOT NULL,
  `ex_deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`ex_id`, `en_id`, `ex_posisi`, `ex_perusahaan`, `ex_start`, `ex_end`, `ex_deskripsi`) VALUES
(7, 9, 'software engineering', 'pt citra sejahtera', '2020-10-10', '2020-11-10', 'membuat aplikasi mobile'),
(8, 10, 'android developer', 'PT. CYBER THRONE', '2018-10-10', '2020-11-10', 'membuat aplikasi mobile'),
(9, 11, 'software analiyst', 'PT. EKA TUNGGAL', '2019-12-10', '2020-01-20', 'membuat');

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
  `hr_date_confirm` date NOT NULL,
  `hr_createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hire`
--

INSERT INTO `hire` (`hr_id`, `en_id`, `pj_id`, `hr_price`, `hr_message`, `hr_status`, `hr_date_confirm`, `hr_createdAt`) VALUES
(5, 9, 12, 1000000, 'membuat aplikasi pencari jodoh', 'wait', '0000-00-00', '2020-11-18 01:30:40');

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
  `pr_photo` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`pr_id`, `en_id`, `pr_aplikasi`, `pr_deskripsi`, `pr_link_pub`, `pr_link_repo`, `pr_tp_kerja`, `pr_type`, `pr_photo`) VALUES
(3, 12, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-16088'),
(4, 12, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-16057'),
(5, 12, 'aplikasi kalkulator', 'membuat aplikasi kalkulator', '-', '-', '-', 'aplikasi mobile', 'photo-16057');

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
(12, 9, 'aplikasi pemutar musik', 'membuat aplikasi pemutar musik', '2021-01-01', 'photo-1608866427807.png', '2020-11-18 01:29:57', '2020-11-18 01:29:57'),
(13, 9, 'aplikasi pemutar musik', 'membuat aplikasi pemutar musik', '2021-01-01', 'photo-1605833560102.png', '2020-11-20 00:52:40', '2020-11-20 00:52:40');

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
(10, 9, 'Kotlin'),
(11, 9, 'php'),
(12, 9, 'python'),
(13, 10, 'python'),
(14, 10, 'html'),
(15, 10, 'css'),
(16, 10, 'kotlin'),
(17, 11, 'kotlin'),
(18, 11, 'javascript'),
(19, 12, 'c++'),
(20, 12, 'c#'),
(21, 12, 'java'),
(22, 13, 'html'),
(23, 13, 'css'),
(24, 13, 'bootstrap');

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
  MODIFY `acc_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `com_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `en_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `ex_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `hr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `pr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pj_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `sk_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
