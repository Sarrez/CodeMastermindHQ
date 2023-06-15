module.exports = function (context, Options) {
    return {
        name: 'my-plugin',
        //lifecycle method
        injectHtmlTags(){
            headTags:[{
                tagName:'meta',
                attributes: {
                    'og:description': 'My Custom og:description-tag'
                }
            }]
        },
        extendCli(cli){
            cli.command('my-custom-action')
            .description('This is a custom command')
            .action(()=>{
                console.log("hello world - for plugin")
            });
        }
    };
}