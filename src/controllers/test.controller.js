const TestCtrl={}

TestCtrl.GetById=(req,res) =>
{
    res.send('GetById')
}

TestCtrl.Create = (req,res) =>
{
    res.send('working from create')
}

TestCtrl.Update = (req,res) =>
{
    res.send('working from update')
}

TestCtrl.Delete = (req,res) =>
{
    res.send('working from delete')
}
TestCtrl.List=(req,res) =>
{
    res.send('List')
}

module.exports=TestCtrl