/**
 * Statement: Just shut the fuck up!In case you hadn’t noticed, I’m a bit of a stickler for terminology.You motherfucker!!!
 * 
 * Describe: JavaScript boot file ( Home Page ).
 * 
 * Further changes, comments: ~
 * 
 * Docs: ~
 * 
 * Original Author: Tony ( Shen Weizhong ).
 * 
 * Version: 0.1.1
 * 
 * Creation Date: 2013.09.09 6:48 ( Tony ).
 * 
 * Last update: 2013.09.10 23:38 ( Tony, -.-)zZ ).
 * 
 * License: ~
 * 
 * Copyright: ~
 */

(function (window, document, requirejs, require) {
	
	'use strict';
	
	var boot = boot || {};
	
	boot.getAgent = function () {
		
		return navigator.userAgent.toLowerCase();
		
	};
	
	boot.isIE = function(userAgent) {
		
		var agent = userAgent || this.getAgent();
		
		return !!agent.match(/msie/i);
		
	};
	
	boot.isGteIE9 = function(userAgent) {
		
		var agent = userAgent || this.getAgent(),
			
			match = agent.match(/msie\D*([\.\d]*)/i),
			
			version = 0;
		
		if (match && match[1]) {
			
			version = match[1];
			
		}
		
		return version >= 9;
		
	};

	boot.req = function (jquery) {
		
		requirejs.config({
			
			baseUrl: 'scripts',
			
			enforceDefine: false,
			
			paths: {
				
				'jquery': jquery,
				
				'helper': 'helper'
				
			},
			
			waitSeconds: 60,
			
			map: {
				
				'*': {'jquery': 'helper/jquery-private'}, 
				
				'helper/jquery-private': {'jquery': 'jquery'}
				
			}
			
		});
		
		require(['helper/modernizr', 'jquery'], function (Modernizr, SJ) {
			
			SJ(function ($) {
				
				if (Modernizr.canvas) {
					
					console.log($.trim($(document).attr('title')));
					
				}
				
			});
			
		});
		
	};

	boot.judgement = function (opts) {
		
		if (this.isIE()) {
			
			this.isGteIE9() ? this.req(opts.jq2x) : this.req(opts.jq1x);
			
		} else {
			
			this.req(opts.jq2x);
			
		}
		
	};

	/*             ___   ___                                   
	             \  \  \  \                                  
	   (___)   ___\__\__\__\__                               
	   (o o)   |  O O O O O O|                               
	  --\ /----+-------------+-------/                       
	  |  O                          /
	   \                           /                         
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ => moo__Steerage ...
	*/

	boot.judgement({
		
		jq1x: 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min',
		
		jq2x: 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min'
		
	});
	
}(window, document, requirejs, require));

