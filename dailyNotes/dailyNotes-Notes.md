## 2023-11-03:  
- what a mess; my terminology for what i want seems to be entirely different from what Obsidian folks use. gah!  
### 2024-03-26:
 - okay; i did it myself, or at least part of it  
 - some TS notes:
	 - need to better understand the sync / async diffs for folder indexing
	 - want to find good ways of expressing list processing such as sorting, and file processing by modification times
	 - also: how can a plugin notice that directory contents have changed
### 2024-03-28:  
- so, there is something fishy about the file list, maybe not sorted the way I want? `mtimeMs`? ....  
- yeah, there is more work to do on that one-liner (ha, ha); the culprit? `forEach` and synchronization
## 2024-03-29:
- do i want to trigger index on modification of directory or file in directory?
- i do not want to trigger on every little keystroke in a file; so how is that accomplished?

## and the dailyNotes list of files is:   

[[idx-dailynotes]]  





