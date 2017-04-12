#pragma strict

var Player : Transform;
private var timer = 0;
var timeMax = 0;

var explosion : GameObject;
private var activated : boolean = false;

var moveSpeedMax : float = 0;
var moveSpeedMin : float =0;
private var moveSpeed : float;

private var height : float = 1.60;

private var amplitude : float = 0;
var amplitudeMin : float = 0;
var amplitudeMax : float = 0;

private var period : float = 0;
var periodMin : float = 0;
var periodMax : float = 0;
 
function Start () 
{
    moveSpeed = Random.Range(moveSpeedMin, moveSpeedMax);
    getTarget();
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
  
    transform.position += transform.forward*moveSpeed*(Time.deltaTime);  
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