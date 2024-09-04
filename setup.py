from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in tech_committee/__init__.py
from tech_committee import __version__ as version

setup(
	name="tech_committee",
	version=version,
	description="Tech_committee",
	author="y",
	author_email="y@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
