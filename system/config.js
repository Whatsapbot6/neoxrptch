// Owner number
global.owner = '212632244668'
// Owner name
global.owner_name = 'محمد بلا'
// Maximum upload file size limit (Default : 250 MB)
global.max_upload = 250
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 10)
global.limit = 10
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92','212']
// Put target jid to forward friends story
global.forwards = '212632244668@c.us'
// Get neoxr apikey by registering at https://api.nxr.my.id
global.Api = new (require('./neoxrApi'))('q7nMK1')
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'tsna . . .'),
   invalid: Func.texted('bold', 'URL is Invalid!'),
   wrong: Func.texted('bold', 'katkhrbeq!'),
   getdata: Func.texted('bold', 'kanqleb'),
   fail: Func.texted('bold', 'malqit walo'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Sorry this feature is in error.'),
   premium: Func.texted('bold', 'This feature only for premium user.'),
   owner: Func.texted('bold', 'This command only for owner.'),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'This command will only work in groups.'),
   botAdmin: Func.texted('bold', 'This command will work when I become an admin.'),
   admin: Func.texted('bold', 'This command only for group admin.'),
   private: Func.texted('bold', 'Use this command in private chat.')
})
