#pragma strict

var Player : Transform;
var MoveSpeed = 0;
var MaxDist = 10;
var MinDist = 5;
var explosion : GameObject;
var timer =0;
var timeMax = 60;
private var activated : boolean = false;
 
function Start () 
{
    getTarget();
    //MoveSpeed=Math.Random()*MaxDist;
}
 
function getTarget()
{
    transform.LookAt(Player);
}

function Update () 
{
    timer++;
    if(timer>=timeMax){
        transform.LookAt(Player);
        timer=0;
    }
  
    transform.position += transform.forward*MoveSpeed*(Time.deltaTime);  
}

function OnCollisionEnter()
{
    getTarget();
}

//________________EXPLOSION__________________________________________________
function OnTriggerEnter (other : Collider) { 
    if (other.CompareTag ("Enemy") || other.CompareTag ("Player")) 
        Explosion();
}

    function ApplyDamage(){
        yield WaitForSeconds(.2);
        Explosion();
    }

    function Explosion(){
        if(activated) return;
        activated = true;

        Instantiate (explosion, transform.position, transform.rotation);
        Destroy(gameObject);
    }