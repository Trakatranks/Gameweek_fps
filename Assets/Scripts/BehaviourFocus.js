#pragma strict

var Player : Transform;
var MoveSpeed = 0;
var MaxDist = 10;
var MinDist = 5;
var explosion : GameObject;
private var activated : boolean = false;
 
function Start () 
{

}

function Update () 
{
    transform.LookAt(Player);
    transform.position += transform.forward*MoveSpeed*Time.deltaTime;  
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