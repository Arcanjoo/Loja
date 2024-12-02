<?php
// Configuração do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "loja_online";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Verificar o método HTTP
if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    echo json_encode([
        "success" => false,
        "message" => "Método não permitido."
    ]);
    http_response_code(405); // Método não permitido
    exit();
}

// Conectar ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Erro ao conectar ao banco de dados: " . $conn->connect_error
    ]);
    exit();
}

// Verificar se todos os parâmetros
if (!isset($_GET['nome']) || !isset($_GET['preco']) || !isset($_GET['descricao'])) {
    echo json_encode([
        "success" => false,
        "message" => "Dados incompletos fornecidos."
    ]);
    http_response_code(400); // Requisição inválida
    exit();
}

// Certificar-se de que os parâmetros
$nomes = $_GET['nome'];
$precos = $_GET['preco'];
$descricoes = $_GET['descricao'];

if (count($nomes) !== count($precos) || count($nomes) !== count($descricoes)) {
    echo json_encode([
        "success" => false,
        "message" => "Dados inconsistentes fornecidos."
    ]);
    http_response_code(400); // Requisição inválida
    exit();
}

// Inserir os dados no banco de dados
for ($i = 0; $i < count($nomes); $i++) {
    $nome = $conn->real_escape_string($nomes[$i]);
    $preco = $conn->real_escape_string($precos[$i]);
    $descricao = $conn->real_escape_string($descricoes[$i]);

    $sql = "INSERT INTO compras (produto_nome, preco, descricao) VALUES ('$nome', '$preco', '$descricao')";

    if (!$conn->query($sql)) {
        echo json_encode([
            "success" => false,
            "message" => "Erro ao salvar o item: " . $conn->error
        ]);
        $conn->close();
        exit();
    }
}

// Fechar a conexão e retornar sucesso
$conn->close();
echo json_encode([
    "success" => true,
    "message" => "Compra registrada com sucesso!"
]);
exit();
?>
