-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 02/12/2024 às 15:19
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `loja_online`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `produto_nome` varchar(255) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `descricao` text NOT NULL,
  `data_compra` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `compras`
--

INSERT INTO `compras` (`id`, `produto_nome`, `preco`, `descricao`, `data_compra`) VALUES
(6, 'Suéter Oversized - Beetlejuice', 229.99, '\n          Suéter confeccionado em tecido de malha. Possui gola redonda, manga longa, acabamento em ribana e costura no tom.\n          Detalhe em bordado no centro da peça. \n          *Ribana é um tecido canelado, muito utilizado para acabameto em mangas, punhos e barras de roupas. \n          Tamanhos: P ao GG;\n          Cor: Listrado Preto e Branco.\n          Material: Malha Retilínea;\n          Composição: 50% Acrílico e 50% Algodão. \n        ', '2024-12-02 13:28:58');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `descricao` text DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `preco`, `descricao`, `foto`) VALUES
(1, 'Camiseta Basic - Latté', 84.90, 'Detalhe em Silk na parte da frente. Confeccionada com linha 100% poliéster (maior durabilidade na costura). Com reforço de ombro a ombro com viés. Composição: Malha 100% Algodão, fio 30.1 penteada. Cor predominante: Caffé Latté.', 'images/camiseta-basic-latte/1.webp'),
(2, 'Camiseta - Sirenes', 84.90, 'Detalhe em Silk na parte de trás. Estampa frontal. Confeccionada com linha 100% poliéster. Composição: Malha 100% Algodão, fio 30.1 penteada. Cor predominante: Preto.', 'images/camiseta-sirenes/1.webp'),
(3, 'Camiseta - Melt', 19.99, 'Detalhe em Silk na parte da frente. Estampa em silk nas costas. Composição: Malha 100% Algodão, fio 30.1 penteada. Cor predominante: Branco.', 'images/camiseta-melt/1.webp');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
