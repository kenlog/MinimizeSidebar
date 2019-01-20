<?php

namespace Kanboard\Plugin\MinimizeSidebar;

use Kanboard\Core\Plugin\Base;

class Plugin extends Base
{

    public function initialize()
    {
        $this->hook->on("template:layout:css", array("template" => "plugins/MinimizeSidebar/Assets/css/style.css"));
        $this->hook->on('template:layout:js', array('template' => 'plugins/MinimizeSidebar/Assets/js/main.js'));
        $this->template->setTemplateOverride('dashboard/sidebar', 'MinimizeSidebar:dashboard/sidebar');
        $this->template->setTemplateOverride('task/sidebar', 'MinimizeSidebar:task/sidebar');
    }

    public function getPluginName()
    {
        return 'MinimizeSidebar';
    }

    public function getPluginDescription()
    {
        return t('Option to minimize sidebar.');
    }

    public function getPluginAuthor()
    {
        return 'Valentino Pesce';
    }

    public function getPluginVersion()
    {
        return '1.0.0';
    }

    public function getCompatibleVersion()
    {
        return '>=1.0.48';
    }

    public function getPluginHomepage()
    {
        return 'https://github.com/kenlog/MinimizeSidebar';
    }

}