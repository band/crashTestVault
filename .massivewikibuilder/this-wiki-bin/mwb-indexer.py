#!/usr/bin/env python

import glob
import os
from pathlib import Path
import shutil

# set up logging
import logging, sys
logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

# set up argparse
import argparse
def init_argparse():
    parser = argparse.ArgumentParser(description='Generate index of markdown files in specified wiki folder.')
    parser.add_argument('--wiki', '-w', required=True, help='root directory of the wiki.')
    parser.add_argument('--folder', '-f', required=True, help='wiki folder path holding markdown files to index.')
    return parser

def main():
    argparser = init_argparse();
    args = argparser.parse_args();
    logging.info(f"args: {args}")

    wiki_root = str(args.wiki) + "/"
    index_folder = f"{wiki_root}" + str(args.folder)
    print(index_folder)
    filename=Path(f"{index_folder}").name + ".md"
    indexname=Path(f"{index_folder}").name + "-index.md"
    indexfile_pathname = index_folder + "/" + indexname
    logging.info('I am working ... on ' + indexfile_pathname +'\n')
    # remove any existing index file
    Path(indexfile_pathname).unlink(missing_ok=True)
    
    mdfiles = [f for f in glob.glob(f"{index_folder}/**/*.md", recursive=True) \
               if Path(f).name != indexname]
    sortedfiles = sorted(mdfiles, key=lambda x: os.path.getmtime(x), reverse=True)
    
    # build the index file
    #   first add index heading info
    if Path(f"{index_folder}/.indexHeading.md").exists():
       shutil.copyfile(f"{index_folder}/.indexHeading.md", indexfile_pathname)

    for f in sortedfiles:
        with open(indexfile_pathname, "a") as file:
            file.write(" - [[" + Path(f).relative_to(wiki_root).stem + "]]  \n")

    
if __name__ == "__main__":
    exit(main())
