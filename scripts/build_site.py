"""Copy only public website assets into the GitHub Pages artifact."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "_site"
PUBLIC_FILES = (
    "index.html",
    "styles.css",
    "learning-paths.js",
    "site-pages.js",
    "topic-pages.js",
    "app.js",
    "b306logo.jpg",
)


def main():
    # This directory contains only generated deployment files.
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for name in PUBLIC_FILES:
        shutil.copy2(ROOT / name, OUTPUT / name)
    shutil.copytree(ROOT / "assets", OUTPUT / "assets")
    (OUTPUT / ".nojekyll").touch()
    print(f"Website assembled in {OUTPUT}")
    print("Only website files and assets are included; docs/ and dcos/ are excluded.")


if __name__ == "__main__":
    main()
