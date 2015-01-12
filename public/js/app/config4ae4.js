
// greensock
if(typeof(window.GreenSockAMDPath)=="undefined")
{
    window.GreenSockAMDPath = "eom/js/libraries/greensock";
    window.GreenSockGlobals = {};
} 

//can't use variable for base Url because it doesn't play nice with r.js optimizer
//var omBaseUrl = '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom';

var reqOM = 
require.config({

    // bundles: {
    //     'textSystemError' : ['text!../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/templates/global/systemError.html'],
    //     'textAlert' : ['text!../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/templates/global/alert.html']
    // },

    paths: {

        'OrangeMoney' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/OrangeMoney', 
        'ServiceProxy' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/ServiceProxy',
        'config' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/config',
        'contribute' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/contribute',

        'question1'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/question1',      
        'question2'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/question2',  
        'question3'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/question3',
        'question4'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/question4',
        'question5'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/question5',                          
        'questions'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/questions',      
        'questionResults'   : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/questions/questionResults',

        'bubble'   : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/bubble/bubble',

        //router
        'router'        : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/router',

        // vendor libs
        underscore : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/underscore',
        backbone : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/backbone/backbone',
        marionette : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/backbone/backbone.marionette.min',
        'handlebars' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/handlebars-v1.3.0',
        'tween-max' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/greensock/TweenMax.min',
        modernizr : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/modernizr-2.6.2.custom.min',
        'big' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/big',
        //JDP: use iCrossing dropdowns  'dropkick' : "eom/js/libraries/jquery.dropkick-min",

        // OM app
        // TODO: categorize please
        appData: 'appData',
        text: '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/libraries/text',
        templates: '../../templates',

        // utils
        'utilities'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/utils/utilities',
        'handle-helpers': '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/utils/handlebar_helpers',

        // model
        'app-model'     : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/models/appModel',
        
        // views
        // JDP: use iCrossing modals   'panel'         : 'views/panel',
        'dollar-graph'  : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/dollar_graph/dollar_graph',
        'graph'         : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/dollar_graph/graph_view',
        'systemError'   : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/systemError',


        //ui
        'slider'        : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/ui/info_slider',
        'alert'         : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/views/alert_panel',
        // controller
        'om-controller' : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/controller/om_controller',

        // events
        'vent'          : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/event/vent',
        'events'        : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/event/event_constant',

        //  Calc logic
        'calc'          : '../sites/unit.voya.com/modules/custom/voya_orange_money/includes/orange-money-html/eom/js/app/com/voya/orm/calc'
        //'calc'          : 'http://localhost:8089/js/om-js-calc/v1/calc',  //used if remote calc code has not been optimized into one file
        // when calc code has been optimized into one file, we point all calc module references to that file
        // 'calc/OMCalcWrapper' : 'http://localhost:8089/om-calc/om-calc.min',
        // 'calc/util/DateUtilities' : 'http://localhost:8089/om-calc/om-calc.min',
        // 'calc/AccountTypes' : 'http://localhost:8089/om-calc/om-calc.min'

    },

    shim : {
        underscore      : {
            exports     : '_'
        },
        backbone        : {
            exports     : 'Backbone',
            //added config to the dependencies of backbone to make sure it gets added into the build first first
            deps        : ['underscore','config']
        },
        marionette      : {
            exports     : 'Backbone.Marionette',
            deps        : ['backbone']
        },
        handlebars      : {
            exports     : 'Handlebars'
        }
    },
    
    baseUrl : "./"


});