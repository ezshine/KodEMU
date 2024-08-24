<?php

class KodEMUPlugin extends PluginBase{
    function __construct() {
        parent::__construct();
    }
    public function regist() {
        $this->hookRegist(array(
            'user.commonJs.insert' => 'KodEMUPlugin.echoJs',
        ));
    }
    public function echoJs() {
        $this->echoFile('static/main.js');
    }
	public function index() {
	    $key=$this->getconfig();
		include($this->pluginPath.'static/page.html');
	}
}