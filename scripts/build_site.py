"""Copy only public website assets into the GitHub Pages artifact."""
import argparse
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUTPUT = ROOT / "_site"
PUBLIC_FILES = (
    "index.html",
    "src/css/styles.css",
    "src/js/learning-paths.js",
    "src/js/site-pages.js",
    "src/js/topic-pages.js",
    "src/js/app.js",
)


def build(output: Path, clean: bool) -> None:
    if output.exists():
        if not clean:
            raise FileExistsError(f"Output directory already exists: {output}")
        shutil.rmtree(output)
    output.mkdir(parents=True)
    for name in PUBLIC_FILES:
        source = ROOT / name
        target = output / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    shutil.copytree(ROOT / "assets", output / "assets")
    (output / ".nojekyll").touch()
    print(f"Website assembled in {output}")
    print("Only website files and assets are included; docs/ and dcos/ are excluded.")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "output",
        nargs="?",
        type=Path,
        help="new output directory (default: _site, which is rebuilt)",
    )
    args = parser.parse_args()
    custom_output = args.output is not None
    output = args.output.resolve() if custom_output else DEFAULT_OUTPUT
    build(output, clean=not custom_output)


if __name__ == "__main__":
    main()
