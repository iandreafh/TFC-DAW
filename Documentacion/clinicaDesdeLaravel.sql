-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2020 at 08:49 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinica`
--

-- --------------------------------------------------------

--
-- Table structure for table `citas`
--

CREATE TABLE `citas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `asistencia` tinyint(1) NOT NULL,
  `fechaAlta` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `citas_tratamientos`
--

CREATE TABLE `citas_tratamientos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idCita` bigint(20) UNSIGNED NOT NULL,
  `idTratamiento` bigint(20) UNSIGNED NOT NULL,
  `idPieza` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `dni` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `doctor` tinyint(1) NOT NULL,
  `directivo` tinyint(1) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventarios`
--

CREATE TABLE `inventarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombreProducto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double(8,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `stockMin` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_06_01_111156_create_pacientes_table', 1),
(2, '2020_06_01_114741_create_citas_table', 1),
(3, '2020_06_01_114758_create_empleados_table', 1),
(4, '2020_06_01_114817_create_inventarios_table', 1),
(5, '2020_06_01_114825_create_pagos_table', 1),
(6, '2020_06_01_114837_create_pieza_dentals_table', 1),
(7, '2020_06_01_114849_create_tratamientos_table', 1),
(8, '2020_06_01_115130_create_citas_tratamientos_table', 1),
(9, '2020_06_01_115154_create_productos_citas_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pacientes`
--

CREATE TABLE `pacientes` (
  `dni` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pagos`
--

CREATE TABLE `pagos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idPaciente` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCita` bigint(20) UNSIGNED NOT NULL,
  `fechaPagado` date DEFAULT NULL,
  `importe` double(8,2) NOT NULL,
  `pendiente` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pieza_dentals`
--

CREATE TABLE `pieza_dentals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productos_citas`
--

CREATE TABLE `productos_citas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idCita` bigint(20) UNSIGNED NOT NULL,
  `idProducto` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tratamientos`
--

CREATE TABLE `tratamientos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idPaciente` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEmpleado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double(8,2) NOT NULL,
  `sesiones` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `citas_tratamientos`
--
ALTER TABLE `citas_tratamientos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citas_tratamientos_idcita_foreign` (`idCita`),
  ADD KEY `citas_tratamientos_idtratamiento_foreign` (`idTratamiento`),
  ADD KEY `citas_tratamientos_idpieza_foreign` (`idPieza`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`dni`);

--
-- Indexes for table `inventarios`
--
ALTER TABLE `inventarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`dni`);

--
-- Indexes for table `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagos_idcita_foreign` (`idCita`),
  ADD KEY `pagos_idpaciente_foreign` (`idPaciente`);

--
-- Indexes for table `pieza_dentals`
--
ALTER TABLE `pieza_dentals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos_citas`
--
ALTER TABLE `productos_citas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_citas_idcita_foreign` (`idCita`),
  ADD KEY `productos_citas_idproducto_foreign` (`idProducto`);

--
-- Indexes for table `tratamientos`
--
ALTER TABLE `tratamientos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tratamientos_idpaciente_foreign` (`idPaciente`),
  ADD KEY `tratamientos_idempleado_foreign` (`idEmpleado`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `citas`
--
ALTER TABLE `citas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `citas_tratamientos`
--
ALTER TABLE `citas_tratamientos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventarios`
--
ALTER TABLE `inventarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pieza_dentals`
--
ALTER TABLE `pieza_dentals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productos_citas`
--
ALTER TABLE `productos_citas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tratamientos`
--
ALTER TABLE `tratamientos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `citas_tratamientos`
--
ALTER TABLE `citas_tratamientos`
  ADD CONSTRAINT `citas_tratamientos_idcita_foreign` FOREIGN KEY (`idCita`) REFERENCES `citas` (`id`),
  ADD CONSTRAINT `citas_tratamientos_idpieza_foreign` FOREIGN KEY (`idPieza`) REFERENCES `pieza_dentals` (`id`),
  ADD CONSTRAINT `citas_tratamientos_idtratamiento_foreign` FOREIGN KEY (`idTratamiento`) REFERENCES `tratamientos` (`id`);

--
-- Constraints for table `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_idcita_foreign` FOREIGN KEY (`idCita`) REFERENCES `citas` (`id`),
  ADD CONSTRAINT `pagos_idpaciente_foreign` FOREIGN KEY (`idPaciente`) REFERENCES `pacientes` (`dni`);

--
-- Constraints for table `productos_citas`
--
ALTER TABLE `productos_citas`
  ADD CONSTRAINT `productos_citas_idcita_foreign` FOREIGN KEY (`idCita`) REFERENCES `citas` (`id`),
  ADD CONSTRAINT `productos_citas_idproducto_foreign` FOREIGN KEY (`idProducto`) REFERENCES `inventarios` (`id`);

--
-- Constraints for table `tratamientos`
--
ALTER TABLE `tratamientos`
  ADD CONSTRAINT `tratamientos_idempleado_foreign` FOREIGN KEY (`idEmpleado`) REFERENCES `empleados` (`dni`),
  ADD CONSTRAINT `tratamientos_idpaciente_foreign` FOREIGN KEY (`idPaciente`) REFERENCES `pacientes` (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
