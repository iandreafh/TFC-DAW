-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2020 at 10:10 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `clinica`
--

-- --------------------------------------------------------

--
-- Table structure for table `citas`
--

CREATE TABLE IF NOT EXISTS `citas` (
`ID` int(10) unsigned NOT NULL,
  `FECHA` date NOT NULL,
  `HORA` time NOT NULL,
  `ASISTENCIA` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `citas_tratamiento`
--

CREATE TABLE IF NOT EXISTS `citas_tratamiento` (
  `ID_TRATAMIENTO` int(11) NOT NULL,
  `ID_CITA` int(11) NOT NULL,
  `ID_PIEZA_DENTAL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
`ID` int(10) unsigned NOT NULL,
  `DNI` varchar(9) NOT NULL,
  `NOMBRE` text NOT NULL,
  `APELLIDOS` text NOT NULL,
  `FECHANACIMIENTO` date NOT NULL,
  `DIRECCION` varchar(255) NOT NULL,
  `TELEFONO` int(12) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `DOCTOR` tinyint(1) NOT NULL,
  `DIRECTIVO` tinyint(1) NOT NULL,
  `ACTIVO` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inventario`
--

CREATE TABLE IF NOT EXISTS `inventario` (
`ID` int(10) unsigned NOT NULL,
  `NOMBRE_PRODUCTO` varchar(255) NOT NULL,
  `PRECIO` int(10) NOT NULL,
  `STOCK` int(10) NOT NULL,
  `STOCK_MIN` int(10) NOT NULL,
  `ACTUALIZADO` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pacientes`
--

CREATE TABLE IF NOT EXISTS `pacientes` (
`ID` int(10) unsigned NOT NULL,
  `DNI` varchar(9) NOT NULL,
  `NOMBRE` text NOT NULL,
  `APELLIDOS` text NOT NULL,
  `FECHANACIMIENTO` date NOT NULL,
  `DIRECCION` varchar(255) NOT NULL,
  `TELEFONO` int(12) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `ACTIVO` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pacientes`
--

INSERT INTO `pacientes` (`ID`, `DNI`, `NOMBRE`, `APELLIDOS`, `FECHANACIMIENTO`, `DIRECCION`, `TELEFONO`, `EMAIL`, `ACTIVO`) VALUES
(5, '12345678D', 'Andrea', 'Fernandez Hita', '0000-00-00', 'C/Mesina n10', 656646464, 'iandreafh@gmail.com', 0),
(6, '12345678E', 'Andrea', 'Fernandez Hita', '1998-02-23', 'C/Mesina n10', 656646464, 'iandreafh@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pagos`
--

CREATE TABLE IF NOT EXISTS `pagos` (
  `ID_PACIENTE` int(10) NOT NULL,
  `ID_CITA` int(10) NOT NULL,
  `FECHA_EMISION` date NOT NULL,
  `FECHA_PAGADO` date DEFAULT NULL,
  `IMPORTE` int(10) NOT NULL,
  `PENDIENTE` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `piezas_dentales`
--

CREATE TABLE IF NOT EXISTS `piezas_dentales` (
  `ID` int(10) unsigned NOT NULL,
  `TIPO` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `productos_cita`
--

CREATE TABLE IF NOT EXISTS `productos_cita` (
  `ID_CITA` int(10) unsigned NOT NULL,
  `ID_PRODUCTO` int(10) NOT NULL,
  `CANTIDAD` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tratamientos`
--

CREATE TABLE IF NOT EXISTS `tratamientos` (
`ID` int(10) unsigned NOT NULL,
  `ID_PACIENTE` int(10) NOT NULL,
  `ID_EMPLEADO` int(10) NOT NULL,
  `NOMBRE` varchar(255) NOT NULL,
  `PRECIO` int(10) NOT NULL,
  `SESIONES` int(10) NOT NULL,
  `ACTUALIZADO` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tratamientos`
--

INSERT INTO `tratamientos` (`ID`, `ID_PACIENTE`, `ID_EMPLEADO`, `NOMBRE`, `PRECIO`, `SESIONES`, `ACTUALIZADO`) VALUES
(1, 1, 1, 'LIMPIEZA', 45, 1, '2020-05-16 17:43:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `citas`
--
ALTER TABLE `citas`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `citas_tratamiento`
--
ALTER TABLE `citas_tratamiento`
 ADD UNIQUE KEY `ID_TRATAMIENTO` (`ID_TRATAMIENTO`,`ID_CITA`,`ID_PIEZA_DENTAL`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `DNI` (`DNI`);

--
-- Indexes for table `inventario`
--
ALTER TABLE `inventario`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `pacientes`
--
ALTER TABLE `pacientes`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `DNI` (`DNI`);

--
-- Indexes for table `tratamientos`
--
ALTER TABLE `tratamientos`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `citas`
--
ALTER TABLE `citas`
MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `inventario`
--
ALTER TABLE `inventario`
MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pacientes`
--
ALTER TABLE `pacientes`
MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tratamientos`
--
ALTER TABLE `tratamientos`
MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
