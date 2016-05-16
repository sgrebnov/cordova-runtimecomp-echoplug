module.exports = function(ctx) {

    var path = ctx.requireCordovaModule('path'),
        shell = ctx.requireCordovaModule('shelljs');

    ['x86', 'x64', 'arm'].forEach(function(arch) {
        var src = path.join(ctx.opts.plugin.dir, 'src/windows/lib/' + arch + '/EchoRuntimeComponent.dll'),
            dest = path.join(ctx.opts.projectRoot,
                'platforms/windows/plugins/com.risingj.echoplugin/' + arch + '/EchoRuntimeComponent.dll');

        console.log(src + ' -> ' + dest);
        shell.cp('-f', src, dest);
    })
};
