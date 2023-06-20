let SocialMedia = require('../entities/socialMedia');

class SocialMediaService {
   findAll(){
    let socialMedia = [];
    socialMedia.push(new SocialMedia(1,"instagram.com/mobilerast/","instagram","We'll help you to finish your development project successfully."));
    socialMedia.push(new SocialMedia(2,"tr.linkedin.com/company/rastmobile","linkedin","Hire vetted developers from Rast Mobile to scale up your tech projects."));
    socialMedia.push(new SocialMedia(3,"behance.net/rastmobile","behance","Software Development Agency Rast Mobile Information Technology Ltd."));
    socialMedia.push(new SocialMedia(4,"twitter.com/rastmobile","twitter","Software Development Agency Rast Mobile Information Technology Ltd."));
    return socialMedia;
   }

   find(id){
    for(let socialMedia of this.findAll()){
        if(socialMedia.id == id){
            return socialMedia;
        }
    }
    return null;
   }
}  
module.exports = SocialMediaService;