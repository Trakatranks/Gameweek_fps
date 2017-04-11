using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class skipSplashScreen : MonoBehaviour {

    public string _nextScene = "titleScreen";

    public float _delay = 5f;

    // Use this for initialization
    public void Start () {
        Init();
    }

    protected void Init()
    {
        Debug.Log("Splash Screen Start");
        StartCoroutine(MaCoroutine());
    }

    public IEnumerator MaCoroutine()
    {
        yield return new WaitForSeconds(_delay);
        SceneManager.LoadScene(_nextScene);
    }

    // Update is called once per frame
    void Update () {
		
	}
}
