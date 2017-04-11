using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class UIManager : MonoBehaviour {

    public void Start()
    {
        Init();
    }

    protected void Init()
    {
        Debug.Log("UIManager Start");
    }

    public void ToScene(string pScene)
    {
        SceneManager.LoadScene(pScene);
    }

    public void Quit()
    {
        Application.Quit();
    }
}