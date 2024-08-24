//var nesromurl="";
kodReady.push(function(){
	Events.bind('explorer.kodApp.before',function(appList){ 
		appList.push({
			name:"KodEMU",
			title:LNG['admin.plugin.defaultKodEMU'],
			icon:'{{pluginHost}}static/image/icon.png',
			ext:"{{config.fileExt}}",
			sort:"{{config.fileSort}}",  
			callback:function(path,ext,name,file){
				// console.log(arguments);

				var url = '{{pluginApi}}&path='+path+'&ext='+ext+'&gamepath='+encodeURIComponent(core.path2url(path,true))+'&name='+encodeURIComponent(name);
				if('window' == "{{config.openWith}}" && !core.isFileView()){
					window.open(url);
				}else{
					var options = {width:'100%',height:'100%'}
					core.openDialog(url,core.icon('{{pluginHost}}static/image/icon.png'),"KodEMU:"+name,false,options);
				}
			},
		});
	});
	if(!$.hasKey('plugin.KodEMU.style')){  //只有首次处理,避免重复调用
    	$.addStyle(
    	"\
		.x-item-icon.x-nes,.x-item-icon.x-NES{\
    		background-image:url('{{pluginHost}}static/image/nes.png');\
    	}\
		.x-item-icon.x-sfc,.x-item-icon.x-sfc,.x-item-icon.x-smc,.x-item-icon.x-SMC{\
    		background-image:url('{{pluginHost}}static/image/snes.png');\
    	}\
		.x-item-icon.x-gba,.x-item-icon.x-GBA{\
    		background-image:url('{{pluginHost}}static/image/gba.png');\
    	}\
		.x-item-icon.x-sega,.x-item-icon.x-SEGA{\
    		background-image:url('{{pluginHost}}static/image/md.png');\
    	}\
		.x-item-icon.x-gb,.x-item-icon.x-GB,.x-item-icon.x-gbc,.x-item-icon.x-GBC{\
    		background-image:url('{{pluginHost}}static/image/gb.png');\
    	}");
	}
});
