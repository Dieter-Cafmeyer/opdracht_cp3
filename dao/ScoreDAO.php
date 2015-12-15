<?php
require_once __DIR__ . '/DAO.php';
class ScoreDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `score`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	/*

	public function selectById($id) {
		$sql = "SELECT * FROM `items` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `items` (`created`, `title`, `content`) VALUES (:created, :title, :content)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':created', $data['created']);
			$stmt->bindValue(':title', $data['title']);
			$stmt->bindValue(':content', $data['content']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function delete($id) {
		$sql = "DELETE FROM `items` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		return $stmt->execute();
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(empty($data['created'])) {
			$errors['created'] = "Please fill in a created value";
		}
		if(empty($data['title'])) {
			$errors['title'] = "Please fill in a title value";
		}
		if(empty($data['content'])) {
			$errors['content'] = "Please fill in a content value";
		}
		return $errors;
	}*/

}