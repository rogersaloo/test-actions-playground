const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    //  1) get some input values
    const bucket = core.getInput('bucket', { required: true});
    const bucketRegion = core.getInput('bucket-region', { required: false});
    const distFolder = core.getInput('dist-folder', { required: true});

    // 2) use the inputs to target s3 bucket- upload files
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
    http://custom-action-js.s3-website-ap-northeast-1.amazonaws.com
    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl)
    // core.notice("Hellllo this is my code");
}
run();
