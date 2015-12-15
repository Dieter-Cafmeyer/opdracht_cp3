<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'ScoreDAO.php';

class ItemsController extends Controller {

	private $scoreDAO;

	function __construct() {
		$this->scoreDAO = new ScoreDAO();
	}

	public function index() {
    $this->_processAddItemFormIfNeeded();
    $items = $this->scoreDAO->selectAll();
    if($this->isAjax) {
      header('Content-Type: application/json');
      echo json_encode($items);
      exit();
    }
    $this->set('items', $items);
	}  

  private function _processAddItemFormIfNeeded() {
    if(!empty($_POST['action']) && $_POST['action'] == 'add-item') {
      $data = array_merge($_POST, array('created' => date('Y-m-d H:i:s')));
      if($result = $this->scoreDAO->insert($data)) {
        if($this->isAjax) {
          header('Content-Type: application/json');
          echo json_encode(array('result' => 'ok', 'inserted_id' => $result));
          exit();
        }
        $this->redirect('index.php');
      } else {
        $errors = $this->scoreDAO->getValidationErrors($data);
        if($this->isAjax) {
          header('Content-Type: application/json');
          echo json_encode(array('result' => 'error', 'errors' => $errors));
          exit();
        }
        $this->set('errors', $errors);
      }
    }
  }

}