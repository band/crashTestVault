# 2023-07-22 submodule updating

- `git` commands to upgrade Massive Wikis to new submodule URLs:
```shell
$ git submodule set-url .massivewikibuilder/massivewikibuilder https://github.com/Massive-Wiki/massivewikibuilder
$ git submodule sync
```  
- `git status` shows that `.gitmodules` has been modified ; `commit` and `push` that change

