# 2023-07-22 submodule updating

- `git` commands to upgrade Massive Wikis to new submodule URLs:
```shell
$ cd <MassiveWiki directory>
$ git submodule set-url .massivewikibuilder/massivewikibuilder https://github.com/Massive-Wiki/massivewikibuilder.git
$ git submodule sync
$ git submodule update --remote --merge .massivewikibuilder/massivewikibuilder
```  
- `git status` shows that `.gitmodules` has been modified ; `commit` and `push` that change

#### update 2023-11-05:
- `git` commands to keep the submodule (once installed) up to date:
```shell
cd <YourMassiveWiki directory>
git submodule update --recursive --remote
```
- `git status` shows that `.massivewikibuilder/massivewikibuilder` has been modified ; `commit` and `push` that change

