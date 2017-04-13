#pragma strict

public var amp:Vector3;

function OnTriggerEnter (other : Collider) {
	if (other.CompareTag ("Player"))
	    other.gameObject.SendMessage("doBump", amp);
	
}