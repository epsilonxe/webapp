//
//  ViewController.swift
//  WebApp
//
//  Created by Ratthaprom Promkam on 4/10/18.
//  Copyright © 2018 Schatsie Co., Ltd. All rights reserved.
//

import Cocoa
import WebKit

class ViewController: NSViewController, WKUIDelegate, WKNavigationDelegate {
    
    @IBOutlet weak var webview: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        webview.uiDelegate = self
        webview.navigationDelegate = self
    
        let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "app_w3")!
        webview.loadFileURL(url, allowingReadAccessTo: url)
        let request = URLRequest(url: url)
        webview.load(request)
        
    }
    

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}

