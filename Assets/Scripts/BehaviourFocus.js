#pragma strict

var Player : Transform;

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

public class BehaviourFocus extends EnemyManager{
	function Start () 
	{
		super();
	    moveSpeed = Random.Range(moveSpeedMin, moveSpeedMax);
	    amplitude = Random.Range(amplitudeMin, amplitudeMax);
	    period = Random.Range(periodMin, periodMax);
	}
	
	function Update () 
	{
	    transform.LookAt(Player);
	    transform.position += transform.forward*moveSpeed*Time.deltaTime;  
	    //transform.position.y = Mathf.Sin( transform.position.x / 2 ); ça fait un truc super marrant !
	
		//print(amplitude*(Mathf.Sin(transform.position.x/period))+height);
	
	    transform.position.y = amplitude*(Mathf.Sin(transform.position.x/period))+height;
	    //transform.position.x= amplitude*(Mathf.Cos(transform.position.y/period))+height;
	}
	
	
	
	//________________EXPLOSION__________________________________________________
	function OnTriggerEnter (other : Collider) { 
	    if (other.CompareTag ("Player")) 
	        Explosion();
	}
	
	function ApplyDamage(){
	        yield WaitForSeconds(.2);
	        Explosion();
	}
	
	function Explosion(){
			super();
			print("EXPLOOOOOOO");
	        if(activated) return;
	        activated = true;
	
	        Instantiate (explosion, transform.position, transform.rotation);
	        Destroy(gameObject);
    }

	override function Destroy(){
		super();
	}
}
 
